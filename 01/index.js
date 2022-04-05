// /https://www.youtube.com/watch?v=puOKhYcPg-0&list=PLfE0DpqEANZ0CQ9pCGlxGKPvYb1Sj6ybV&index=2
var Proficiency;
(function (Proficiency) {
    Proficiency["Junior"] = "JUNIOR";
    Proficiency["Regular"] = "REGULAR";
    Proficiency["Expert"] = "EXPERT";
})(Proficiency || (Proficiency = {}));
var candidate = {
    firstName: "Jhon",
    lastName: "Doe",
    emailAddress: "jhon.doe@com",
    age: 29,
    mainLanguage: "C#",
    proficiency: Proficiency.Expert,
    hobbies: ["sport", "netflix", "boks"]
};
var EmailValidator = /** @class */ (function () {
    function EmailValidator(minLength) {
        this.minLength = minLength;
        // this.minLength = minLength;
    }
    EmailValidator.prototype.isValid = function (candidate) {
        throw new Error("Method not implemented.");
    };
    EmailValidator.prototype.isVaLid = function (_a) {
        var emailAddress = _a.emailAddress;
        return emailAddress != null && emailAddress.length > this.minLength;
    };
    return EmailValidator;
}());
var ProficiencyValidator = /** @class */ (function () {
    function ProficiencyValidator(candidate) {
        this.candidate = candidate;
    }
    ProficiencyValidator.prototype.isValid = function (candidate) {
        throw new Error("Method not implemented.");
    };
    ProficiencyValidator.prototype.isVaLid = function (_a) {
        var proficiency = _a.proficiency;
        if (this.candidate.age < 25) {
            return true;
        }
        return proficiency !== Proficiency.Junior && proficiency !== Proficiency.Regular;
    };
    return ProficiencyValidator;
}());
function getName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, " ").concat(lastName);
}
function processCandidate(candidate) {
    var fullName = getName(candidate);
    var validators = [new EmailValidator(10), new ProficiencyValidator(candidate)];
    var isValid = validators.every(function (validator) { return validator.isVaLid(candidate); });
    if (!isValid) {
        return;
    }
    // if (candidate.age.length < 2) {
    //     console.log("you are too young");
    //     return;
    // }
}
processCandidate(candidate);
