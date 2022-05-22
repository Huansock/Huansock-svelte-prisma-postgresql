<script>
	import TodoItem from '../lib/TodoItem.svelte';
	const name = 'Todo';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>
<div class="todos">
	<h1>{name}</h1>

	<form action="" method="" class="new">
		<input type="text" name="text" aria-label="Add Todos" placeholder="+Add Todos" />
	</form>

	<TodoItem />
</div>

<style>
	.todos {
		width: 100%;
		max-width: 42rem;
		margin: 4rem auto;
	}
	.new {
		margin: 0 0 0.5rem 0;
	}
	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgb(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}
	/* Todoitem 컴포넌트 안에 있는 인풋에도 스타일을 적용하고 싶다면 :global 을 쓰세요 */
	.todos :global(input) {
		border: 1px solid transparent;
	}
	.todos :global(input:focus-visible) {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}
</style>
