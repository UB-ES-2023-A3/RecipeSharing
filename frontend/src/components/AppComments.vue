<template>
  <div class="comment-container">
    <div class="title-container">
      <h3 style="border-bottom: 2px solid #d44d31; padding-bottom: 5px;">COMMENTS</h3>
    </div>
    <div class="comments-list scrollable-content">
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          {{ comment.text }}
        </li>
      </ul>
    </div>
    <div class="add-comment">
      <div class="textfield-container">
        <label class="label" for="commentInput">Añadir comentario:</label>
        <textarea
          v-model="newComment"
          id="commentInput"
          placeholder="Escribe tu comentario aquí"
          class="textarea"
        ></textarea>
      </div>
      <button @click="addComment" class="submit-button">Add comment</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],      // Array para almacenar los comentarios
      newComment: ''      // Variable para almacenar el nuevo comentario
    };
  },
  methods: {
    addComment() {
      this.comments.push({ text: this.newComment });
      this.newComment = '';
    }
  }
};
</script>

<style scoped>
.comment-container {
  width: 75%;
  margin: 20px auto;
}

.title-container {
  text-align: center;
  margin-bottom: 10px;
  color: #d44d31;
}

.label {
  display: block; /* Hace que la etiqueta sea un bloque, lo que permite centrar el texto */
  text-align: center;
  color: #d44d31;
}

.comments-list {
  margin-bottom: 20px;
}

.scrollable-content {
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  border: 2px solid #d44d31;
  border-radius: 10px;
  background-color: #fff;
}

.add-comment {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.textfield-container {
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
}

.textarea {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #d44d31;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 50px; /* Medida inicial del cuadro de comentarios */
}

.submit-button {
  background-color: #FF5733;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #ffcc00;
}
</style>
