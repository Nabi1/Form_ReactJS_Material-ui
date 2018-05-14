import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.list = {
            value: [
                {
                    name: "Bruce Banner",
                    alias: "Hulk",
                    age: 28
                },
                {
                    name: "Tony Stark",
                    alias: "Iron Man",
                    age: 35
                },
                {
                    name: "Henry Pym",
                    alias: "Ant Man",
                    age: 29
                },
                {
                    name: "Peter Parker",
                    alias: "Spiderman",
                    age: 22
                },
                {
                    name: "Peter Quill",
                    alias: "Star Lord",
                    age: 26
                },
                {
                    name: "James Howlett",
                    alias: "Wolverine",
                    age: 33
                },
                {
                    name: "Matt Murdok",
                    alias: "Daredevil",
                    age: 34
                }
            ]
        };
    }

    trierParName(event) {
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].name);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].name) {
                    arr2.push(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    trierParAlias(event) {
        //     this.setState({value: event.target.value});
        //     this.list.value.sort((a,b) =>
        //     a.alias.toUpperCase()
        //     b.alias.toUpperCase()
        //     a.alias > b.alias
        // );
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].alias);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].alias) {
                    arr2.push(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    trierParAge(event) {
        //     this.setState({value: event.target.value});
        //     this.list.value.sort((a,b) =>
        //     a.age > b.age
        // );
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].age);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].age) {
                    arr2.push(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    trierParNameD(event) {
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].name);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].name) {
                    arr2.unshift(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    trierParAliasD(event) {
        // this.setState({value: event.target.value});
        // this.list.value.sort((a,b) =>
        // a.alias.toUpperCase()
        // b.alias.toUpperCase()
        // b.alias > a.alias
        // );
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].alias);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].alias) {
                    arr2.unshift(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    trierParAgeD(event) {
        // this.setState({value: event.target.value});
        // this.list.value.sort((a,b) =>
        // b.age > a.age
        // );
        let arr1 = [];
        let arr2 = [];
        this.setState({ value: event.target.value });
        for (let i = 0; i < this.list.value.length; i++) {
            arr1.push(this.list.value[i].age);
        }
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < this.list.value.length; k++) {
                if (arr1[j] === this.list.value[k].age) {
                    arr2.unshift(this.list.value[k]);
                }
            }
        }
        this.list.value = arr2;
    }

    render() {
        return (
            <div>
                <div>
                    {this.list.value.map(({ name, alias, age }) => (
                        <p>
                            nom: {name}, <br /> Age: {age} ans, <br /> Alias:{" "}
                            {alias}
                        </p>
                    ))}
                </div>
                <br />
                <br />
                <button onClick={this.trierParAlias.bind(this)}>
                    Trier par alias (croissant)
                </button>
                <button onClick={this.trierParAge.bind(this)}>
                    Trier par age (croissant)
                </button>
                <button onClick={this.trierParName.bind(this)}>
                    Trier par nom (croissant)
                </button>
                <button onClick={this.trierParAliasD.bind(this)}>
                    Trier par alias (décroissant)
                </button>
                <button onClick={this.trierParAgeD.bind(this)}>
                    Trier par age (décroissant)
                </button>
                <button onClick={this.trierParNameD.bind(this)}>
                    Trier par nom (décroissant)
                </button>
            </div>
        );
    }
}

export default List;
