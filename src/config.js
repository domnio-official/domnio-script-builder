const values = {
    "pocketbase-endpoint": "https://domnio-account.pockethost.io"
}

function getconfig(key) {
    return values[key]
}

export default { getconfig }