function getrankDescription(college) {
    debugger;
    let text = "";

    switch (college) {
        case "pbrvits":
            text = "pbrvits is in Kavali.";
            break;
        case "SRM":
            text = "SRM is a university, it is in Chennai.";
            break;
        case "vec":
            text = "vec is an autonomous college, it is in Kavali.";
            break;
        case "rsr":
            text = "rsr is a non-autonomous college, it is in Kavali.";
            break;
        case "audisankara":
            text = "audisankara is autonomous, it is in Gudur.";
            break;
        default:
            text = "Please select a college.";
    }

    document.getElementById("rankDescription").innerHTML = text;
}
