const express = require("express");
const router = express.Router();

const Student = require("../models/student");

//Get Request
//for getting the student data

router.get("/student/get", async (req, res) => {
  await Student.find({}).then((studentData) => {
    if (studentData.length > 0) {
      res.status(200).json(studentData);
    } else {
      res.status(404).json({ msg: "no student Data found" });
    }
  });
});

//Post Request

router.post("/student/post", (req, res) => {
  const newStudent = Student({
    class: req.body.class,
    board: req.body.board,
    personal_detail: req.body.personal_detail,
    marks_detail: req.body.marks_detail,
    performance: req.body.performance,
    fees: req.body.fees,
  });

  newStudent
    .save()
    .then((studentData) => {
      res.status(200).json({ msg: "successfully addedd" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Unablr to Add data" });
    });
});

router.put("/student/update/:id", (req, res) => {
    Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        class: req.body.class,
        board: req.body.board,
        personal_detail: req.body.personal_detail,
        marks_detail: req.body.marks_detail,
        performance: req.body.performance,
        fees: req.body.fees,
      },
    }
  )
    .then((studentData) => {
      res.status(200).json(studentData);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get single Resource

router.get("/student/single_data/:id", (req, res) => {
  Resource.findOne({ _id: req.params.id })
    .then((studentData) => {
      res.status(200).json(studentData);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;