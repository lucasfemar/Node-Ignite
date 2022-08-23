"use strict";
/**
 * name - String
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
