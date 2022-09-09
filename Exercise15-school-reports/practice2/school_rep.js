const school_reports = (grades) => {
    splitting = grades.split(',')
    len = splitting.length
    return splitting[0] + ': ' + len
}

module.exports = school_reports