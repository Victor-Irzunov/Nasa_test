import { makeAutoObservable } from 'mobx'

export default class ObjectStore {
	constructor() {
		this._object = [
			{id: 1, name: 'Asteroids'},
			{id: 2, name: 'Asteroids2'},
		]
		this._isObject = false
		makeAutoObservable(this)
	}

	setObject(data) {
		this._object = data
	}
	setIsObject(data) {
		this._isObject = data
	}

	get object() {
		return this._object
	}
	get isObject() {
		return this._isObject
	}
}

//https://www.youtube.com/watch?v=H2GCkRF9eko&t=4512s