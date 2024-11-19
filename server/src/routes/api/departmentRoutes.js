"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var departmentController_js_1 = require("../../controllers/departmentController.js");
router.route('/').get(departmentController_js_1.getDepartments).post(departmentController_js_1.addDepartment);
router.route('/:departmentID').get(departmentController_js_1.getSingleDepartment);
exports.default = router;
