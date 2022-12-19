import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeInputt,
    onClickCategoryy,
    onClickRatingg,
    clearr,
  } = props

  const onChangeInput = event => {
    onChangeInputt(event.target.value)
  }

  const onClickClear = () => {
    clearr()
  }
  return (
    <div className="filters-group-container">
      <div>
        <input
          onKeyDown={onChangeInput}
          onChange={onChangeInput}
          type="search"
          placeholder="search"
        />
        <h1>Category</h1>
        <ul>
          {categoryOptions.map(each => {
            const onClickCategory = () => {
              onClickCategoryy(each.categoryId)
            }
            return (
              <li>
                <button onClick={onClickCategory} key={each.categoryId}>
                  <p>{each.name}</p>
                </button>
              </li>
            )
          })}
        </ul>
        <ul>
          {ratingsList.map(each => {
            const onClickRating = () => {
              onClickRatingg(each.ratingId)
            }
            return (
              <li>
                <button onClick={onClickRating} key={each.ratingId}>
                  <img
                    className="img"
                    src={each.imageUrl}
                    alt={`rating ${each.ratingId}`}
                  />
                </button>
              </li>
            )
          })}
        </ul>
        <button onClick={onClickClear}>Clear Filters</button>
      </div>
    </div>
  )
}

export default FiltersGroup
