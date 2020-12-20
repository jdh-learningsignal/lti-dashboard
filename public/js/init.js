// 과목 로딩
async function getCourses(accountId) {
    try {
        const res = await axios.get('/accounts/' + accountId + '/courses');
        const courses = res.data;
        console.log(courses);
    } catch (err) {
        console.error(err);
    }
}

const accountId = $(".dashboard-wrap").data("accountId");

console.log(accountId);
console.log(getCourses(accountId));