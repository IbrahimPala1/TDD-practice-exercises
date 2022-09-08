const schoolReports = (colour) => { 
    let splitting = colour.split(" ") //name of array is splitting
    //console.log(splitting)
    let red = 0
    let green = 0
    let amber = 0
    return splitting.map(element => {
        if(element === "Green") {
             num = green =+ 1
             //console.log(num)
             return "Green:" + num
        } else if(element === "Amber") {
            return "Amber:1"
        } else if(element === "Red") {
            return "Red:1"
        } else {
            return "false"
        }
    }).join()
}




module.exports = schoolReports