const users = [
    {
        id: 1,
        name: 'Stefan',
        email: 'stefan123@gmail.com',
        password: '123zaq'
    },
    {
        id: 2,
        name: 'Stefan',
        email: 'stefan123@gmail.com',
        password: '123zaq'
    }];

const userEndpoint = (router) => {
    router.get('/api/users', async (request, response, next) => {
        response.status(200).send({user: users});
    });

    router.post('/api/user', async (request, response, next) => {
        users.push(request.body.newUser);

        response.status(200).send({user: users[users.length - 1]});
    });

    router.get('/api/user/:id', async (request, response, next) => {
        response.status(200).send({user: users[request.params.id - 1]});
    });

}

    export default userEndpoint;