import { gql, request } from 'graphql-request';

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const getCourseList = async () => {
    const query = gql`
        query GetCourseList {
            courseLists {
                author
                name
                id
                free
                description
                banner {
                    url
                }
                chapters {
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
        return result;
    } catch (error) {
        console.error('Error fetching course list:', error);
        throw error;
    }
};

export default {
    getCourseList
};
