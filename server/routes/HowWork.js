const express = require("express");
const {validateToken} = require("../middleware/authentication");
const {
  body,
  validationResult
} = require("express-validator");
const {
  ApiError,
  ApiSuccess
} = require("../shared/helper/helper");
const {
  HowWork
} = require("../models");

const router = express.Router();

router.post("/", validateToken, body("description").notEmpty().trim(), body("detail1").notEmpty().trim(), body("detail2").notEmpty().trim(), body("detail3").notEmpty().trim(), body("detail4").notEmpty().trim(), body("detail5").notEmpty().trim(), async (req, res) => {
  const errors = validationResult(req);
  const post = req.body;
  try {
    if (errors.isEmpty()) {
      await HowWork.create(post);
      ApiSuccess(201, post, res);
    } else {
      ApiError(400, errors.array(), res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.patch("/update/:id", validateToken, async (req, res) => {
  const {
    description,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5
  } = req.body;
  const contentId = req.params.id;
  const checkContentExist = await HowWork.findByPk(contentId);
  try {
    if (checkContentExist) {
      await HowWork.update({
        description,
        detail1,
        detail2,
        detail3,
        detail4,
        detail5
      }, {
        where: {id: contentId},
        returning: true,
        plain: true,
      }).then((result) => {
        ApiSuccess(201, result, res);
      });
    } else {
      ApiError(400, "Content not found", res);
    }
  } catch (error) {
    ApiError(400, error, res);
  }
});

router.get("/", async (req, res) => {
  const aboutContent = await HowWork.findAll();
  ApiSuccess(200, aboutContent, res);
});

module.exports = router;