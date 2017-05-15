<script>
(function() {
    var socket = new WebSocket('ws://localhost:8080');

    function reload() {
        document.location.reload();
    };

    socket.onmessage = reload;
})()
</script>

// !function(){function o(){document.location.reload()}var n=new WebSocket("ws://localhost:8080");n.onmessage=o}();
