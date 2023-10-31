function Validation() {
    let regName = /^[a-zA-Z]+$/;
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let job=document.getElementById("job").value;

    if(!regName.test(fname) || !regName.test(lname) || !regName.test(job)) {
         alert("Niepoprawne dane");
    }

    let drive=document.getElementsByName("drive");

    let test = false

    for(let i=0;i<drive.length;i++) {
        if(drive[i].checked == true) {
            test=true
        }
    }

    if(!test) {
        alert("Nie zaznaczyłeś\\aś środka transportu")
    }
    return false;
}
