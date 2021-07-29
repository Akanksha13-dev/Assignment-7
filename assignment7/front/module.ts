
enum Role{SuperAdmin,Admin,Subscriber};
class model1{
    ID:number;
    First__Name:string;
    Middle__Name:string;
    Last__Name:string;
    Email:string;
    Phone_Number:number;
    Role:Role;
    Address:string;
    DateTime:string;
    constructor(ID:number,First__Name:string,Middle__Name:string,Last__Name:string,Email:string,Phone_Number:number,Role:Role,Address:string,DateTime:string)
    {
        this.ID=ID;
        this.First__Name=First__Name;
        this.Middle__Name=Middle__Name;
        this.Last__Name=Last__Name;
        this.Email=Email;
        this.Phone_Number=Phone_Number;
        this.Role=Role;
        this.Address=Address;
        this.DateTime=DateTime;
    }
}
 let ListS=[];
 const obj1=new model1(1,'Akansha','fg','singh','singh@gmail.com',9876542123,Role.Admin,'adfghkk','2018-12-10T13:49:51.141Z');
 ListS.push(obj1);
 const obj2=new model1(2,'Akriti','fg','singh','singh@gmail.com',7812345321,Role.Admin,'adfghkk','2018-12-10T13:49:51.141Z');
 ListS.push(obj2);
//API CALLS ======================================================================================

async function getUsers() {

    let response = await fetch('http://localhost:9000/exp22');
    let users = await response.json() as model1[] ;

    return users; // same as Promise.resolve(users)

}
async function deleteUser(id: string) {

    let response = await fetch(`http://localhost:9000/exp11/${id}`, {
        method: 'DELETE'
    })
    let data = await response.json()
    return data;
}
async function editUser<model1>(id: string, object: model1) {

    let response = await fetch(`http://localhost:9000/exp11/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(object)
    })
    let data = await response.json()
    return data;
}
async function addUser<model1>(id: string, object: model1) {

    let response = await fetch(`http://localhost:9000/exp11/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(object)
    })
    let data = await response.json()
    return data;
}
//===================================================================================================

interface list<T>{
    create(data:T):void;
    read(r:number):void;
    update(r:number):void;
    delete(r:number):void;
 }
class changeL implements list<model1>{
    create(data:model1):void{
        const row=new model1(data.ID,data.First__Name,data.Middle__Name,data.Last__Name,data.Email,data.Phone_Number,data.Role,data.Address,data.DateTime);
        ListS.push(row);
    }
    read(r:number):void{
        var li=[];
    
        for (var j = 0; j < col.length; j++) {
            var s=document.getElementById(col[j]+(r)).innerHTML;
            //document.getElementById(j).value="";
            li.push(s);
        }
        let per={'ID':li[0],'First__Name':li[1],'Middle__Name':li[2],
        'Last__Name':li[3],
        'Email':li[4],
        'Phone_Number':li[5],
        'Role':li[6],
        'Address':li[7],
        'DateTime':li[8] }
        document.getElementById('retriveValue').innerHTML=JSON.stringify(per);
        document.getElementById("select"+r+"").style.visibility ="visible";
        document.getElementById("retrive"+r+"").style.visibility ="hidden";
        document.getElementById("update"+r+"").style.visibility ="hidden";
        document.getElementById("delete"+r+"").style.visibility ="hidden";
        document.getElementById("row"+r+"").style.backgroundColor = "white";

    }

    update(no:number){

        document.getElementById("update"+no).style.visibility="hidden";
        document.getElementById("saveUpdate"+no).style.visibility="visible";
        document.getElementById("cancelUpdate"+no).style.visibility="visible";

        var Id=document.getElementById("ID"+no);
        var FirstName=document.getElementById("First__Name"+no);
        var MiddleName=document.getElementById("Middle__Name"+no);
        var LastName=document.getElementById("Last__Name"+no);
        var email =document.getElementById("Email"+no) ;  
        var Phone_N =document.getElementById("Phone_Number"+no) ; 
        var role =document.getElementById("Role"+no) ; 
        var address =document.getElementById("Address"+no) ;
        var date =document.getElementById("DateTime"+no) ;
                
                var ID=Id.innerHTML;
                var FName=FirstName.innerHTML;
                var MName=MiddleName.innerHTML;
                var LName=LastName.innerHTML;
                var Email=email.innerHTML;
                var Phone=Phone_N.innerHTML;
                var Role=role.innerHTML;
                var Address=address.innerHTML;
                var Date=date.innerHTML;
                
                      helpCancel(ID,FName,MName,LName,Email,Phone,Role,Address,Date);
        Id.innerHTML="<input type='text' id='ID_"+no+"'  value='"+ID+"'/>";          
        FirstName.innerHTML="<input type='text' id='First_Name"+no+"'  value='"+FName+"'/>";
        MiddleName.innerHTML="<input type='text' id='Middle_Name"+no+"'  value='"+MName+"'/>";
        LastName.innerHTML="<input type='text' id='Last_Name"+no+"'  value='"+LName+"'/>";
        email.innerHTML="<input type='text' id='Email_"+no+"'  value='"+Email+"'/>";
        Phone_N.innerHTML="<input type='text' id='Phone_Number_"+no+"'  value='"+Phone+"'/>";
        role.innerHTML="<input type='text' id='Role_"+no+"'  value='"+Role+"'/>";
        address.innerHTML="<input type='text' id='Address_"+no+"'  value='"+Address+"'/>";
        date.innerHTML="<input type='datetime' id='Date_"+no+"'  value='"+Date+"'/>";
    }
    delete(r:number):void{
        let par=r-1
         deleteUser(r-1).then(usersArray => {`deleted,${usersArray}`})
        .catch(()=> {alert("Unexpected delete Error Occured !")})  ;
         CreateTableFromJSON()
        //ListS.splice(r-1,1);
    }
} 

    