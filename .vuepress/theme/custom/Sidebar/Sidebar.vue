<!--TODO: Recurse children for sidebar (look at current sidebar?) -->
<template>
		<div class="col-xl-3 col-lg-4 col-12">
				<div
						class="card"
						v-for="(item, i) in items"
		        :key="i"
				>
						<div class="card-body">
								<h6>{{item.title}}</h6>
								<nav>
										<ul>
												<li v-for="(child, c) in item.children">
														<a href="#">
																<h5>{{child.title}}</h5>
														</a>
														<ul>
																<li v-for="(a) in child.headers">
																		<a href="#">{{a.title}}</a>
																</li>
														</ul>
												</li>
										</ul>
<!--										<ul>-->
<!--												<li>-->
<!--														<a href="#">-->
<!--																<h5>Crate</h5>-->
<!--														</a>-->
<!--														<ul>-->
<!--																<li><a href="#">Getting Started</a></li>-->
<!--																<li><a href="#">Further Customization</a></li>-->
<!--														</ul>-->
<!--												</li>-->
<!--												<li>-->
<!--														<a href="#">-->
<!--																<h5>Crate</h5>-->
<!--														</a>-->
<!--														<ul>-->
<!--																<li><a href="#">Getting Started</a></li>-->
<!--																<li><a href="#">Further Customization</a></li>-->
<!--														</ul>-->
<!--												</li>-->
<!--												<li>-->
<!--														<a href="#">-->
<!--																<h5>Crate</h5>-->
<!--														</a>-->
<!--														<ul>-->
<!--																<li><a href="#">Getting Started</a></li>-->
<!--																<li><a href="#">Further Customization</a></li>-->
<!--														</ul>-->
<!--												</li>-->
<!--										</ul>-->
								</nav>
						</div>
				</div>
		</div>
</template>

<script>
		export default {
		    name: 'Sidebar',

				props: ['items']
		}
</script>
