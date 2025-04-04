export const formatDateTime = (d: any): string => {
    const date = new Date(d);
    const day = date.getDate();
    const monthNames = [
        'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear() + 543;

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${monthNames[monthIndex]} ${year} ${hours}:${minutes}:${seconds}`;
}

export function capitalize(s: string) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export function truncate(text: string, maxLength: number = 7): string {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}