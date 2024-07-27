// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';
// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pagesize: 8,
//         category: 'general'
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pagesize: PropTypes.number,
//         category: PropTypes.string
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0,

//         }
//         document.title = this.props.category;
//     };
//     async updatenews() {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=${this.state.page}&pageSize=${this.props.pagesize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedata = await data.json();
//         this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false })
//         console.log(parsedata.articles);
//     }
//     fetchMoreData = async() => {
//         this.setState({ page: this.state.page + 1 })
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
//         // this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedata = await data.json();
//         this.setState({ articles: this.state.articles.concat(parsedata.articles), totalResults: parsedata.totalResults })
//         console.log(parsedata.articles);
//     }
//     // handleNextclick = async () => {
//     //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) { } else {
//     //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
//     //         this.setState({ loading: true })
//     //         let data = await fetch(url);
//     //         let parsedata = await data.json();
//     //         this.setState({
//     //             loading: false,
//     //             page: this.state.page + 1,
//     //             articles: parsedata.articles
//     //         })
//     //         console.log('nextclicked')
//     //     }
//     // }
//     // handlePrevclick = async () => {
//     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
//     //     this.setState({ loading: true })
//     //     let data = await fetch(url);
//     //     let parsedata = await data.json();
//     //     this.setState({
//     //         loading: false,
//     //         page: this.state.page - 1,
//     //         articles: parsedata.articles
//     //     })
//     // }
//     async componentDidMount() {
//         this.props.setProgress(0)
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pagesize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         this.props.setProgress(30)
//         let parsedata = await data.json();
//         this.props.setProgress(50)
//         this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false })
//         this.props.setProgress(70)
//         console.log(parsedata.articles);
//         this.props.setProgress(100);
//     }
//     render() {
//         return (
//             <>
//                 <div className='container my-3' style={{ textAlign: 'center', alignItems: 'center' }}>
//                     <h2>News-{this.props.category}</h2>
//                     {/* {this.state.loading && <Spinner/>}  */}
//                     <InfiniteScroll
//                         dataLength={this.state.articles.length}
//                         next={this.fetchMoreData}
//                         style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
//                         // inverse={true} //
//                         hasMore={this.state.articles.length !== this.state.totalResults}
//                         // loader={<Spinner />}
//                         // scrollableTarget="scrollableDiv"
//                     >
//                         {this.state.articles.length > 0 ? (<div className="ro" style={{ display: "flex", flexWrap: "wrap", margin: '20px', justifyContent: "center", alignItems: "center" }}>
//                             {this.state.articles.map((element) => {
//                                 return <div className=" " key={element.url} style={{ width: "18rem", margin: '20px 39px' }} >
//                                     <Newsitem title={element ? element.title.slice(0, 45) : ""} source={element.source.name} author={element.author} date={element.publishedAt} description={element.description ? element.description.slice(0, 88) : ""} image={element.urlToImage ? element.urlToImage : "https://i.insider.com/669e7fb52d66759f66fceacc?width=1200&format=jpeg"} linktoarticle={element.url} />
//                                 </div>
//                             })}
//                         </div>) : (
//                             !this.state.loading && <div>No articles available</div>
//                         )}
//                     </InfiniteScroll>
//                 </div>
//                 {/* <div className="container d-flex justify-content-between">
//                     <button type="button " disabled={this.state.page <= 1} className="btn btn-dark " onClick={this.handlePrevclick}> &larr; Previous</button>
//                     <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
//                 </div> */}
//             </>
//         )
//     }
// }

// export default News
import React, { Component } from 'react';
import Newsitem from './Newsitem';
// import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        setProgress: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        document.title = this.props.category;
    }

    async updatenews() {
        const { country, category, pagesize } = this.props;
        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=${page}&pageSize=${pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles || [],
            totalResults: parsedata.totalResults || 0,
            loading: false,
        });
        console.log(parsedata.articles);
    }

    fetchMoreData = async () => {
        const { country, category, pagesize } = this.props;
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=${this.state.page + 1}&pageSize=${pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles || []),
            totalResults: parsedata.totalResults || 0,
        });
        console.log(parsedata.articles);
    };

    async componentDidMount() {
        this.props.setProgress(0);
        const { country, category, pagesize } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=126b1d4b271442a9ace8207217a12acb&page=1&pageSize=${pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedata.articles || [],
            totalResults: parsedata.totalResults || 0,
            loading: false,
        });
        this.props.setProgress(70);
        console.log(parsedata.articles);
        this.props.setProgress(100);
    }

    render() {
        return (
            <>
                <div className='container my-3' style={{ textAlign: 'center', alignItems: 'center' }}>
                    <h2>News - {this.props.category}</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        style={{ display: 'flex', flexDirection: 'column-reverse' }}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                    >
                        {this.state.articles.length > 0 ? (
                            <div className="ro" style={{ display: "flex", flexWrap: "wrap", margin: '20px', justifyContent: "center", alignItems: "center" }}>
                                {this.state.articles.map((element) => {
                                    return (
                                        <div className=" " key={element.url} style={{ width: "18rem", margin: '20px 39px' }} >
                                            <Newsitem
                                                title={element.title ? element.title.slice(0, 45) : ""}
                                                source={element.source.name}
                                                author={element.author}
                                                date={element.publishedAt}
                                                description={element.description ? element.description.slice(0, 88) : ""}
                                                image={element.urlToImage ? element.urlToImage : "https://i.insider.com/669e7fb52d66759f66fceacc?width=1200&format=jpeg"}
                                                linktoarticle={element.url}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            !this.state.loading && <div>No articles available</div>
                        )}
                    </InfiniteScroll>
                </div>
            </>
        );
    }
}

export default News;
