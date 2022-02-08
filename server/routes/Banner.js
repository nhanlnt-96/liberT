const express = require("express");
const {
  body,
  validationResult
} = require("express-validator");
const {Banner} = require("../models");
const helper = require("../shared/helper/helper");
const {validateToken} = require("../middleware/authentication");

const router = express.Router();

router.post("/", validateToken, body("title").notEmpty().trim(), async (req, res) => {
  const errors = validationResult(req);
  const post = req.body;
  try {
    if (errors.isEmpty()) {
      await Banner.create(post);
      helper.ApiSuccess(201, post, res);
    } else {
      helper.ApiError(400, errors.array(), res);
    }
  } catch (error) {
    helper.ApiError(400, error, res);
  }
});

router.patch("/update/:id", validateToken, async (req, res) => {
  const {
    title,
    subTitle,
    content,
    imageName,
    imageUrl,
    connectBtnName,
    bgImageName,
    bgImageUrl
  } = req.body;
  const contentId = req.params.id;
  const checkContentExist = await Banner.findByPk(contentId);
  try {
    if (checkContentExist) {
      await Banner.update({
        title,
        subTitle,
        content,
        imageName,
        imageUrl,
        connectBtnName,
        bgImageName,
        bgImageUrl
      }, {
        where: {id: contentId},
        returning: true,
        plain: true,
      }).then((result) => {
        helper.ApiSuccess(201, result, res);
      });
    } else {
      helper.ApiError(400, "Content not found", res);
    }
  } catch (error) {
    helper.ApiError(400, error, res);
  }
});

router.get("/", async (req, res) => {
  const bannerContent = await Banner.findAll();
  helper.ApiSuccess(200, bannerContent, res);
});

module.exports = router;
