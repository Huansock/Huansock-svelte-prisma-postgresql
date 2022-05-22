<!-- 모든 페이지에 css 를 주기 위해 __layout 컴포넌트를 생성함 -->
<script>
	import '../app.css';
</script>

<!-- dom 요소를 집어넣어주기 위해 slot을 사용함. 자세한 내용은 여기 참조 https://kit.svelte.dev/docs/layouts -->
<main>
	<slot />
</main>
