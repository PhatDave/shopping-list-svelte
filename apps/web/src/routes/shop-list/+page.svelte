<script lang="ts">
    import List from "$components/List.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        let api_realtime = "https://pocketbase-test.site.quack-lab.dev/api/realtime";
        let source = new EventSource(api_realtime);

        source.addEventListener('PB_CONNECT', async function (event: MessageEvent) {
            let client_id = JSON.parse(event.data).clientId;

            let body = {
                "clientId": client_id,
                "subscriptions": ["shopping_list"]
            }

            const res = await fetch(api_realtime, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        });

        source.addEventListener('shopping_list', function (event: MessageEvent) {
            console.log(JSON.parse(event.data));
        });
    });
</script>

<div class="form-control flex-1 items-center justify-center">
    BBBBBBBBBBBBBBBBBBBBBBB
    <List>
    </List>
</div>
