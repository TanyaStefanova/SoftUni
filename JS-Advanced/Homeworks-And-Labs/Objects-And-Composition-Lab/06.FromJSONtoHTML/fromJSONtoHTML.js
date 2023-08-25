// 50/100:

function solve(dataAsJson) {

    let result = [];
    result.push('<table>');

    let data = JSON.parse(dataAsJson);
    let props = Object.keys(data[0]);
    result.push(`   <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (let entry of data) {
        result.push(`   <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);

    }

    result.push('</table>');
    console.log(result.join('\n'));
}
solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);