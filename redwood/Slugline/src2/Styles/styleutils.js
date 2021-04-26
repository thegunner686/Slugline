function rgb(r, g, b) {
    return (a) => {
        return a != undefined && a != null ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
    }
}

export { rgb }