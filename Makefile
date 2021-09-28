.PHONY: serve
serve:
	@rm -rf ./.nuxt
	@npm run dev

.PHONY: sandbox
sandbox:
	@rm -rf ./.nuxt
	@DOMAIN=sandbox.quecarta.com npm run dev

.PHONY: live
live:
	@rm -rf ./.nuxt
	@DOMAIN=quecarta.com npm run dev
