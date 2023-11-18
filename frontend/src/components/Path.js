const app_name = 'ratemyride-3b8d03447308';
exports.buildPath = function buildPath(route)
{
    if (process.env.NODE_ENV === 'production')
    {
        return 'https://' + app_name + '.herokuapp.com/' + route;
    }
    else
    {
        return 'http://localhost:5055/' + route;
    }
}