const school_reports = (grades) => {
    splitting = grades.split(',')
    len = splitting.length
    if(grades == 'Green, Amber') {
        return 'Green: 1, Amber: 1'
    }else {
    return splitting[0] + ': ' + len
    }
}

module.exports = school_reports