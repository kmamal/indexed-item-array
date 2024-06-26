
class IndexedItemArray {
	constructor (array, indexKey) {
		this._array = array
		this._indexKey = indexKey
	}

	array () { return this._array }

	size () { return this._array.length }

	at (i) { return this._array.at(i) }

	set (i, item) {
		this._array[i] = item
		item[this._indexKey] = i
	}

	push (item) {
		item[this._indexKey] = this._array.length
		this._array.push(item)
	}

	pop () {
		const item = this._array.pop()
		delete item[this._indexKey]
		return item
	}

	removeItem (item) {
		this.removeIndex(item[this._indexKey])
	}

	removeIndex (index) {
		delete this._array[index][this._indexKey]
		if (index !== this._array.length - 1) {
			this.set(index, this._array.at(-1))
		}
		this._array.length--
	}
}

module.exports = { IndexedItemArray }
