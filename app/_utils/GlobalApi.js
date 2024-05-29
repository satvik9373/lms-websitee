import { gql, request } from 'graphql-request';

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const getCourseList = async () => {
    const query = gql`
        query GetCourseList {
                courseLists(first: 20, orderBy: createdAt_DESC) {
                  author
                  name
                  id
                  free
                  description
                  banner {
                    url
                  }
                  chapter {
                    ... on Chapter {
                      id
                      name
                      video {
                        url
                      }
                    }
                  }
                  totalChapters
                  tag
                }
              }
              
    `;

    try {
        const result = await request(MASTER_URL, query);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error fetching course list:', error);
        throw error;
    }
};

const getSideBanner=async()=>{
    const query=gql`
    query GetSideBanner {
        sideBanners {
          id
          name
          banner {
            id
            url
          }
          url
        }
      }      
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
    courseList(where: {slug: "ultimate-guide-marketing-success"}) {
      author
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id 
          name
          video {
            url
          }
        }
      }
      description
      free
      id
      name
      tag
      totalChapters
      slug
    }
  }  
  `

  const result = await request(MASTER_URL, query);
  return result;
}

const enrollToCourse=async(courseId,email)=>{
  const query=gql`
  mutation MyMutation {
    createUserEnrollCoure(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrollCouresConnection {
      edges {
        node {
          id
        }
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const checkUserEnrolledToCourse=async(courseId,email)=>{
  const query=gql`
  query MyQuery {
    userEnrollCoures(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
      id
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getUserEnrolledCourseDetails=async(id,email)=>{
  const query=gql`
  query MyQuery {
    userEnrollCoures(where: {id: "`+id+`", userEmail: "`+email+`"}) {
      courseId
      id
      userEmail
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseList {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        description
        free
        id
        name
        slug
        totalChapters
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const markChapterCompleted=async(enrollId,chapterId)=>{
  const query=gql`
  mutation MyMutation {
    updateUserEnrollCoure(
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+chapterId+`"}}}}}
      where: {id: "`+enrollId+`"}
    ) {
      id
    }
    publishUserEnrollCoure(where: {id: "`+enrollId+`"}) {
      id
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result; 
}

export default {
    getCourseList,
    getSideBanner,
    getCourseById,
    enrollToCourse,
    checkUserEnrolledToCourse,
    getUserEnrolledCourseDetails,
    markChapterCompleted
};
