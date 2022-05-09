/**
 * @param val 
 * @returns 
 */
export default function (val: any): string {
    let copyipt: any = document.createElement("input");
    copyipt.setAttribute("value", val);
    document.body.appendChild(copyipt);
    copyipt.select();
    document.execCommand("copy");
    document.body.removeChild(copyipt);
    return val
}