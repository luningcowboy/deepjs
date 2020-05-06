class Student {
    constructor() {
        this._name = '';
        this._rollNum = ''
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getRollNum() {
        return this._rollNum;
    }
    setRollNum(num) {
        this._rollNum = num;
    }
}
class StudentView {
    constructor() {}
    printStudentDetails(name, rollNum) {
        console.log("Student:");
        console.log("Name:", name);
        console.log("Roll No:", rollNum);
    }
}
class StudentController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }
    setStudentName(name) {
        this._model.setName(name);
    }
    getStudentName() {
        return this._model.getName();
    }
    setStudentRollNo(rollNo) {
        this._model.setRollNum(rollNo);
    }
    getStudentRollNo() {
        return this._model.getRollNum();
    }
    updateView() {
        this._view.printStudentDetails(this._model.getName(), this._model.getRollNum());
    }
}

function getStutdentFormatData() {
    let std = new Student();
    std.setName('Robert');
    std.setRollNum('10');
    return std;
}

function main() {
    let model = getStutdentFormatData();
    let view = new StudentView();
    let controller = new StudentController(model, view);
    controller.updateView();
    controller.setStudentName('Tom');
    controller.updateView();
}
main();
/*
 * 关于MVC
 * 关于MVC我们需要思考的一个问题是，如何界定M,V,C的职责。
 * Model: 保存我们的数据结构，同时，可以处理一部分逻辑
 * View: 主要负责展示，比如:UI,各种效果逻辑，同时负责用户交互
 * Controller: 负责数据流向Model,并且负责更新流向View
 * [MVC]-->[Modules]-->[GameWork]
 */
