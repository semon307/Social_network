import profileReducer, {addPostAC, deletePostAC} from "../redux/profile-reducer";
let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It is my first post!", likesCount: 10},
    ],
    profile: null,
    status: "",
}
test("post should be added", () => {
    let expectedState = profileReducer(state, addPostAC("some new post"))
    expect(expectedState.posts.length).toBe(3)
    expect(expectedState.posts[2].message).toBe("some new post")
})
test("post should be deleted", () => {
    let expectedState = profileReducer(state, deletePostAC(2))
    expect(expectedState.posts.length).toBe(1)
    expect(expectedState.posts[0].message).toBe("Hi, how are you?")
})