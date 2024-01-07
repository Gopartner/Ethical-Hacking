.PHONY: menu new-branch switch-branch finish

menu:
	@echo "1. Buat branch baru"
	@echo "2. Pindah ke branch"
	@echo "3. Selesai (commit dan push)"
	@read -p "Pilih target: " choice; \
	case $$choice in \
		1) make new-branch;; \
		2) make switch-branch;; \
		3) make finish;; \
		*) echo "Pilihan tidak valid.";; \
	esac

new-branch:
	@read -p "Masukkan nama branch baru: " branch_name; \
	git branch $$branch_name; \
	git checkout $$branch_name

switch-branch:
	@read -p "Masukkan nama branch yang ingin di-switch: " branch_name; \
	git checkout $$branch_name

finish:
	git add .
	git commit -m "Commit pada: $$(date +'%Y-%m-%d || %H:%M:%S')"
	git push -u origin master

