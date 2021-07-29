var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var role;
(function (role) {
    role[role["SuperAdmin"] = 0] = "SuperAdmin";
    role[role["Admin"] = 1] = "Admin";
    role[role["Subscriber"] = 2] = "Subscriber";
})(role || (role = {}));
;
var model1 = /** @class */ (function () {
    function model1(id, first__name, middle__name, last__name, email, phone_number, role, address, datetime) {
        this.id = id;
        this.first__name = first__name;
        this.middle__name = middle__name;
        this.last__name = last__name;
        this.email = email;
        this.phone_number = phone_number;
        this.role = role;
        this.address = address;
        this.datetime = datetime;
    }
    return model1;
}());

//API CALLS =====================================================================================
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('http://localhost:9000/exp11');
        let users = yield response.json();
        return users; // same as Promise.resolve(users)
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`http://localhost:9000/exp11/${id}`, {
            method: 'DELETE'
        });
        let data = yield response.json();
        return data;
    });
}
function editUser(id, object) {
    console.log(object,"hii");
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`http://localhost:9000/exp11/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        });
        let data = yield response.json();
        return data;
    });
}
function addUser(object) {
    //console.log(object);
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`http://localhost:9000/exp11`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        });
        let data = yield response.json();
        return data;
    });
}
//==========================================================================================
//API CALLS ======================================================================================

// function getUsers() {
//     return __awaiter(this, void 0, void 0, function () {
//         var response, users;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, fetch('http://localhost:9000/exp22')];
//                 case 1:
//                     response = _a.sent();
//                     return [4 /*yield*/, response.json()];
//                 case 2:
//                     users = _a.sent();
//                     return [2 /*return*/, users]; // same as Promise.resolve(users)
//             }
//         });
//     });
// }
// function deleteUser(id) {
//     return __awaiter(this, void 0, void 0, function () {
//         var response, data;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, fetch("http://localhost:9000/exp11/" + id, {
//                         method: 'DELETE'
//                     })];
//                 case 1:
//                     response = _a.sent();
//                     return [4 /*yield*/, response.json()];
//                 case 2:
//                     data = _a.sent();
//                     return [2 /*return*/, data];
//             }
//         });
//     });
// }
// function editUser(id, object) {
//     return __awaiter(this, void 0, void 0, function () {
//         var response, data;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, fetch("http://localhost:9000/exp11/" + id, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify(object)
//                     })];
//                 case 1:
//                     response = _a.sent();
//                     return [4 /*yield*/, response.json()];
//                 case 2:
//                     data = _a.sent();
//                     return [2 /*return*/, data];
//             }
//         });
//     });
// }
//################################################################
var changeL = /** @class */ (function () {
    function changeL() {
    }
    changeL.prototype.create = function (data) {
        var row = new model1(data.ID, data.First__Name, data.Middle__Name, data.Last__Name, data.Email, data.Phone_Number, data.Role, data.Address, data.DateTime);
        ListS.push(row);
    };
    changeL.prototype.read = function (r) {
        var li = [];
        for (var j = 0; j < col.length; j++) {
            var s = document.getElementById(col[j] + (r)).innerHTML;
            //document.getElementById(j).value="";
            li.push(s);
        }
        var per = { 'ID': li[0], 'First__Name': li[1], 'Middle__Name': li[2],
            'Last__Name': li[3],
            'Email': li[4],
            'Phone_Number': li[5],
            'Role': li[6],
            'Address': li[7],
            'DateTime': li[8] };
        document.getElementById('retriveValue').innerHTML = JSON.stringify(per);
        document.getElementById("select" + r + "").style.visibility = "visible";
        document.getElementById("retrive" + r + "").style.visibility = "hidden";
        document.getElementById("update" + r + "").style.visibility = "hidden";
        document.getElementById("delete" + r + "").style.visibility = "hidden";
        document.getElementById("row" + r + "").style.backgroundColor = "white";
    };
    changeL.prototype.update = function (no) {
        document.getElementById("update" + no).style.visibility = "hidden";
        document.getElementById("saveUpdate" + no).style.visibility = "visible";
        document.getElementById("cancelUpdate" + no).style.visibility = "visible";
        var Id = document.getElementById("id" + no);
        var FirstName = document.getElementById("first__name" + no);
        var MiddleName = document.getElementById("middle__name" + no);
        var LastName = document.getElementById("last__name" + no);
        var email = document.getElementById("email" + no);
        var Phone_N = document.getElementById("phone_number" + no);
        var role = document.getElementById("role" + no);
        var address = document.getElementById("address" + no);
        var date = document.getElementById("datetime" + no);
        var ID = Id.innerHTML;
        var FName = FirstName.innerHTML;
        var MName = MiddleName.innerHTML;
        var LName = LastName.innerHTML;
        var Email = email.innerHTML;
        var Phone = Phone_N.innerHTML;
        var Role = role.innerHTML;
        var Address = address.innerHTML;
        var Date = date.innerHTML;
        helpCancel(ID, FName, MName, LName, Email, Phone, Role, Address, Date);
        Id.innerHTML = "<input type='text' id='ID_" + no + "'  value='" + ID + "'/>";
        FirstName.innerHTML = "<input type='text' id='First_Name" + no + "'  value='" + FName + "'/>";
        MiddleName.innerHTML = "<input type='text' id='Middle_Name" + no + "'  value='" + MName + "'/>";
        LastName.innerHTML = "<input type='text' id='Last_Name" + no + "'  value='" + LName + "'/>";
        email.innerHTML = "<input type='text' id='Email_" + no + "'  value='" + Email + "'/>";
        Phone_N.innerHTML = "<input type='text' id='Phone_Number_" + no + "'  value='" + Phone + "'/>";
        role.innerHTML = "<input type='text' id='Role_" + no + "'  value='" + Role + "'/>";
        address.innerHTML = "<input type='text' id='Address_" + no + "'  value='" + Address + "'/>";
        date.innerHTML = "<input type='datetime' id='Date_" + no + "'  value='" + Date + "'/>";
    };
    changeL.prototype["delete"] = function (r) {
        //var par = "" + (r - 1);
        console.log(typeof(r));
        deleteUser(r).then(usersArray => {`deleted,${usersArray}`;CreateTableFromJSON();})
        .catch(()=> {alert("Unexpected delete Error Occured !")}) 
        //CreateTableFromJSON() 
        //ListS.splice(r-1,1);
    };
    return changeL;
}());
