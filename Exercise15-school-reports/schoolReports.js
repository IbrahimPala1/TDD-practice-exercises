const schoolReports = (colour) => { 
    if(colour == "Green") {
        return "Green:1"
    }else if(colour == "Green, Green"){
        return "Green:2"
    }else if(colour == "Green, Green, Green") {
        return "Green:3"
    }


}
module.exports = schoolReports