package business.book;

/*
 * TODO: Create a record constructor with fields corresponding to the fields in the
 * book table of your database.
 */

public record Book(long bookId,
				   String title,
				   String author,
				   String description,
				   int price,
				   int rating,
				   boolean isPublic,
				   boolean isFeatured,
				   long categoryId) {
	@Override
	public String toString() {
		return "Book{" +
				"bookId=" + bookId +
				", title='" + title + '\'' +
				", author='" + author + '\'' +
				", description='" + description + '\'' +
				", price=" + price +
				", rating=" + rating +
				", isPublic=" + isPublic +
				", isFeatured=" + isFeatured +
				", categoryId=" + categoryId +
				'}';
	}


	public String title() {
		return title;
	}


	public String getAuthor() {
		return author;
	}


	public String getDescription() {
		return description;
	}


	public int getPrice() {
		return price;
	}


	public int getRating() {
		return rating;
	}


	public boolean getIsPublic() {
		return isPublic;
	}


	public boolean getIsFeatured() {
		return isFeatured;
	}


	public long getCategoryId() {
		return categoryId;
	}


	public long getBookId() {
		return bookId;
	}
}
