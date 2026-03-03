<template>
    <div class="breadcrumb">
        <ul>
            <li>
                <a href="/" >Home</a>
            </li>
            <li>
                <a href="#none">1Depth</a>
                <ul>
                    <li><a href="#none">1Depth-1</a></li>
                    <li><a href="#none">1Depth-2</a></li>
                    <li><a href="#none">1Depth-3</a></li>
                </ul>
            </li>
            <li>
                <a href="#none">2Depth</a>
                <ul>
                    <li><a href="#none">2Depth-1</a></li>
                    <li><a href="#none">2Depth-2</a></li>
                    <li><a href="#none">2Depth-3</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "breadcrumb",
};
</script>

<style>
</style>