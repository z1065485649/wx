<style scoped lang="less">
.tree-node {
	position: relative;
	cursor: pointer;
	.fa {
		font-size: 18px;
		position: absolute;
	}
	&>div {
		font-size: 16px;
		line-height: 40px;
	}
	&>div.selected {
		background-color: #F5F5F5;
		//color: white;
	}
	&>div.selected:hover {
		background-color: #F5F5F5;
	}
	&>div:hover {
		background-color: #F5F5F5;
	}
	.tree-item {
		display: flex;
		padding-right: 20px;
		border: 1px solid #DDDDDD;
		border-top: none;
	}
	.pull-left {
		flex: 1;
	}
	.pull-right {}
}
</style>

<template>
	<div class="tree-node">
		<div @click.stop='toggle' :class="['tree-item',selected?'selected':'']" :style="{paddingLeft: left + 'px'}">
			<Icon v-if='hasChild && !isRoot' :type="unfolded?'minus-round':'plus-round'" class="fa" :style="{left: left - 20 + 'px',top:10 + 'px'}"></Icon>
			<div class="pull-left" :title="node.description">{{node.name}}</div>
			<div class="pull-right">
				<Button v-if="!(level == 4)" class="text-success" type="text" @click.stop="handleAddChild(node)" size="small">添加</Button>
				<Button v-if="!isRoot" class="text-warning" type="text" @click.stop="handleEditNode(node)" size="small">修改</Button>
				<Button v-if="!hasChild" class="text-danger" type="text" @click.stop="handleDeleteNode(node)" size="small">删除</Button>
			</div>
		</div>
		<ul v-show="unfolded" v-if='hasChild'>
			<li>
				<MenuTree v-for='child in filterNullItems(node.children)' :key="child.id" :value="value" :node='child' :left='left+20' :level='level + 1' @input="handleChildInput" @editNode="handleEditNode" @addChild="handleAddChild" @deleteNode="handleDeleteNode"></MenuTree>
			</li>
		</ul>
	</div>
</template>


<script>
export default {
	name: 'MenuTree',
	props: {
		left: {
			type: Number,
			default: 20
		},
		level: {
			type: Number,
			default: 1
		},
		node: {
			type: Object,
			required: true
		},
		isRoot: {
			type: Boolean,
			default: false
		},
		value: {
			type: String,
			default: null
		}
	},
	data: function() {
		return {
			selected: this.isRoot,
			unfolded: this.isRoot
		}
	},
	methods: {
		toggle() {
			if (this.isRoot) return;
			this.unfolded = !this.unfolded;
			this.$emit('input', this.node.path);
		},

		filterNullItems(items) {
			return items.filter(it => it != null);
		},

		handleChildInput(value) {
			this.$emit('input', value);
		},

		handleEditNode(target) {
			this.$emit('editNode', target);
		},

		handleAddChild(target) {
			this.$emit('addChild', target);
		},

		handleDeleteNode(target) {
			this.$emit('deleteNode', target);
		}
	},
	computed: {
		hasChild: function() {
			return this.node && this.node.children && this.node.children.length;
		}
	},
	watch: {
		"value": function() {
			if (this.isRoot) {
				this.selected = true;
				return;
			}
			this.selected = (this.value && this.node && this.value.indexOf('/' + this.node.id + '/') != -1)
		},
	}
}
</script>