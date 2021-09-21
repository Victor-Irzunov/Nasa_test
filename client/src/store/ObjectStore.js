import { makeAutoObservable } from 'mobx'

export default class ObjectStore {
	constructor() {
		this._objectData = {}
		this._isObject = false
		this._isDisplay = false
		this._date = ''
		makeAutoObservable(this)
	}

	setObjectData(data) {
		this._objectData = data
	}
	setIsObject(data) {
		this._isObject = data
	}
	setIsDisplay(data) {
		this._isDisplay = data
	}
	setDate(data) {
		this._date = data
	}

	get objectData() {
		return this._objectData
	}
	get isObject() {
		return this._isObject
	}
	get isDisplay() {
		return this._isDisplay
	}
	get date() {
		return this._date
	}
}

//https://www.youtube.com/watch?v=H2GCkRF9eko&t=4512s