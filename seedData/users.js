const seedUsers = [
    {
        userName:"guest",
        email:"guest",
        password:"guest",
    },
    {
        userName:"admin",
        email:"admin",
        password:"admin",
        isAdmin:"true"
    },
    {
        userName:"superadmin",
        email:"superadmin",
        password:"superadmin",
        isAdmin:"true",
        isSuperAdmin:'true'
    },
    {
        userName:"penguin1",
        email:"penguin1@example.com",
        password:"iamapenguin"
    },
    {
        userName:"penguin2",
        email:"penguin2@example.com",
        password:"iamapenguin"
    },
]

module.exports = seedUsers