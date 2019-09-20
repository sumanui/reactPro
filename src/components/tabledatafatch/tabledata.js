import React from 'react'
import SingleDataTable from './singleDataTable';
class TableData extends React.Component {
    constructor() {
        super();
        this.state = {
            mapTableData: [],
            readData: [],
            page: 11,
            inputText: "",
            nextPageData: [],
            href: ""
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.setState({
                    mapTableData: res,
                    readData: res
                })
                this.pageGetData("1")
            })
    }
    pageGetData(value) {
        let readData = this.state.readData
        var mapTableCopyData = []
        for (let i = 0; i < readData.length; i++) {
            if (readData[i].userId == value) {
                mapTableCopyData.push(readData[i])
            }
        }
        this.setState({
            mapTableData: value == 0 ? readData : mapTableCopyData
        })
    }
    // __________________ASCENDING AND DECENING CODE HERE(NOT COMPLETED)__________________________-
    getTitle(e) {
        let mapTableData = this.state.mapTableData
        mapTableData.sort((a, b) => {
            // console.log(a[userId]);
        })
    }
    // ______________________FILTER CODE START(NOT COMPLETED SOME ERRORS ACCURING)_____________________
    filteredValue(e) {
        this.setState({ inputText: e.target.value.toLowerCase() })
        let readData = this.state.readData;
        readData = readData.filter((r) => {
            return r.title.toLowerCase().indexOf(this.state.inputText) != -1;
        })
        console.log(readData);
        this.setState({
            mapTableData: readData
        })
    }
    // ____________________GET PARTICULAR COLUMNDATA TO OTHER PAGE_______________________
    getColumnData(id) {
        let mapTableData = this.state.mapTableData
        mapTableData = mapTableData.filter(r => { return id == r.id })
        var currURL = $(location).attr('href'),
        index = currURL.indexOf('?');
        currURL = currURL.substring(0, index != -1 ? index : currURL.length);
        this.setState({
            nextPageData: mapTableData,
            href: $(location).attr('href', currURL + '?page=' + id)
        })
    }

    backLink(){
        history.go(-1);
        this.setState({
            href:""
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.href == "" ? <div>
                    <div className="filteredDiv">
                        <input type="text" value={this.state.inputText} onChange={(e) => this.filteredValue(e)} />
                        <select onChange={(e) => this.getTitle(e)}>
                            <option>select</option>
                            <option>Ascending</option>
                            <option>Decending</option>
                        </select>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>completed</th>
                                <th>userId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mapTableData.map((data, key) => (
                                <tr key={key} onClick={(e) => this.getColumnData(`${data.id}`)}>
                                    <td>
                                        {data.id}
                                    </td>
                                    <td>
                                        {data.title}
                                    </td>
                                    <td>
                                        {data.completed}
                                    </td>
                                    <td>
                                        {data.userId}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {new Array(this.state.page).fill([...Array(this.state.page).keys()])[0].map((page, key) => <button key={key} onClick={(e) => this.pageGetData(page)} value={page}>{page}</button>)}
                </div> : null}
                {this.state.href != "" ? <SingleDataTable {...this.state} {...this.props} backLink={(e)=>this.backLink(e)} /> : null}
            </div>

        )
    }
}
export default TableData;