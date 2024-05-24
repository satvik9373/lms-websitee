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

export default {
    getCourseList,
    getSideBanner,
    getCourseById
};
