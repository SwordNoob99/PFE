import { useSelector } from "react-redux"


export function getProjectsInformation() {
    return new Promise((resolve) => {
                console.log(useSelector(state => state.userProjectsReducer.userProjects.projects))
            resolve(
                  useSelector(state => state.userProjectsReducer.userProjects.projects)
            )
    })
  }