import React, { Component } from 'react'
import NewsItem from './NewsItem';


export class News extends Component {
  constructor(props){
    super(props);
    this.state={
      articles:[],
      page:1,
      categ: props.cat
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.categ}&apiKey=7078829a451244ddadd1f2ebc4861aa7&page=1`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles});
  }

  handleprv= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.categ}&apiKey=7078829a451244ddadd1f2ebc4861aa7&page=${this.state.page-1}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    });
  }
  handlenxt= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.categ}&apiKey=7078829a451244ddadd1f2ebc4861aa7&page=${this.state.page+1}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
    });
  }


  render() {
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center my-5 p-3'>{`Newzzo - Top ${this.state.categ} Headlines`}</h1>
        <div className="row my-5">
        {this.state.articles.map((ele)=>{
          return <div className="col-md-3 my-2" key={ele.url}>
          <NewsItem title={ele.title} description={ele.description} imgurl={ele.urlToImage} newsurl={ele.url}/>
          </div>
        })};
        </div>
        <div className='prev_nxt d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handleprv}>&larr;Prev</button>
        <button disabled={this.state.articles.length===0} type="button" className="btn btn-success" onClick={this.handlenxt}>Next&rarr;</button>
        </div>
      </div>
      </>
    )
  }
}

export default News
