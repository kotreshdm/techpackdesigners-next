// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
// import ApplicationHeader from "../ApplicationHeader";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import { useRouter } from "next/router";
// // Mock next/router
// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// // Create mock Redux store
// const mockStore = configureMockStore();
// const store = mockStore({
//   theme: "light",
//   posts: {
//     posts: [],
//     portfilio: [],
//     postFetchTime: null,
//     categories: [],
//     post: {},
//     postsCurrentPage: 1,
//     categoriesCurrentPage: 1,
//     selectedCategory: "",
//     pageSize: 8,
//     categoriesPageSize: 8,
//     loading: false,
//     error: "",
//     refreshTime: 1 * 60 * 60,
//     searchPosts: "",
//   },
// });
// describe("ApplicationHeader", () => {
//   it("renders ApplicationHeader component", () => {
//     // Mock router object
//     const mockRouter = {
//       pathname: "/mock-path",
//       query: {},
//       asPath: "/mock-path",
//     };
//     useRouter.mockReturnValue(mockRouter);

//     const { getByText, rerender } = render(
//       <Provider store={store}>
//         <ApplicationHeader />
//       </Provider>
//     );

//     // Perform assertions

//     // Re-render the component with a different Redux state
//     // store.dispatch({
//     //   type: "SOME_ACTION",
//     //   payload: {
//     //     /* payload */
//     //   },
//     // });
//     rerender(
//       <Provider store={store}>
//         <ApplicationHeader />
//       </Provider>
//     );

//     // Perform additional assertions based on component behavior
//     // For example:
//     // expect(getByText("Some Other Content")).toBeInTheDocument();
//   });
// });
