const graphql = require('graphql')

var _ = require('lodash')

//dummy data
var userDummyData = [
    {id:'1', name:'saul',age: '26'},
    {id:'2', name:'augusto',age: '27'},
    {id:'3', name:'jorge',age: '22'}
]




const {

    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    

} = graphql

//create types 
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This type is for user',
    fields: () =>({

        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})


//Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    description:'Root query decsription',
    fields:{
        user:{
            type: UserType,
            args:{id: {type: GraphQLString}},


            resolve(parent,args)
            {
                //here we resolve the data
                //get and return data from a datasorce

               /* let user = {
                    id: '115',
                    age: 26,
                    name: 'Saul'
                }

                return user */

                return _.find(userDummyData,{id: args.id})

            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})