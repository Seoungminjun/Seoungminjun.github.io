const rendermembers = () => {
    const members = JSON.parse(localStorage.getItem("members")) || [];
    document.querySelector("table#join-members tbody").innerHTML =
    members.reduce((html,{id,name,content,createdAt}, index) => {
        console.log(index, html);
        return `
            ${html}
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${content}</td>
                <td>${convertToDateTime(createdAt)}</td>
            </tr>`;
    },"");
};

const f = (n) => n < 10 ? '0' + n : n;
const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const yy = f(d.getFullYear());
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${yy}/${mm}/${dd} ${hh}:${mi}`;
};
rendermembers();