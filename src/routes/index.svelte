<script>
	import TodoItem from '../lib/TodoItem.svelte';
	const name = 'Todo';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>
<h1>{name}</h1>
<form action="" method="">
	<input type="text" name="text" aria-label="Add Todos" placeholder="+Add Todos" />
</form>
<TodoItem />
