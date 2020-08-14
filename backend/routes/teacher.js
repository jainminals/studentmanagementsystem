const express = require("express");
const router = express.Router();

const Teacher = require("../models/teacher");

//Get Request
//for getting the student data

router.get("/teacher/get", async (req, res) => {
  await Teacher.find({}).then((TeacherData) => {
    if (TeacherData.length > 0) {
      res.status(200).json(TeacherData);
    } else {
      res.status(404).json({ msg: "No Teacher Data found" });
    }
  });
});

//Post Request

router.post("/teacher/post", (req, res) => {
  const newTeacher = Teacher({
    class: req.body.class,
    board: req.body.board,
    personal: req.body.personal,
    professional_detail: req.body.professional_detail,
    payslip: req.body.payslip,
    experince: req.body.experince,
  });

  newTeacher
    .save()
    .then((teacherData) => {
      res.status(200).json({ msg: "successfully addedd" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Unable to Add data" });
    });
});

router.put("/teacher/update/:id", (req, res) => {
  Teacher.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        class: req.body.class,
        board: req.body.board,
        personal: req.body.personal,
        professional_detail: req.body.professional_detail,
        payslip: req.body.payslip,
        experince: req.body.experince,
      },
    }
  )
    .then((teacherData) => {
      res.status(200).json(teacherData);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get single Resource

router.get("/teacher/single_data/:id", (req, res) => {
  Resource.findOne({ _id: req.params.id })
    .then((teacherData) => {
      res.status(200).json(teacherData);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
