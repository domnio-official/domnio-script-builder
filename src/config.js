const values = {
    "deta-edition": true,
    "dev-mode": false,
    "pocketbase-endpoint": "https://domnio-account.pockethost.io",
    "deta-project-key": "a0Bzobfu92qE_k4UfVqhQ2yFuQVEfc5irPjbY5jYRyncH",
    "deta-drive_name": "projects"
}

function getconfig(key) {
    return values[key]
}

console.log(values['deta-project-key'])

export default { getconfig, values }